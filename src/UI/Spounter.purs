module UI.Spounter where

import Prelude
import React as R
import React.DOM as RD
import React.DOM.Props as RP
import Thermite as T
import Control.Monad.Rec.Class (forever)
import Data.Functor (void)
import Data.Maybe (Maybe(Just))
import Data.Show (show)
import Control.Monad.Eff (Eff)
-- import ReactDOM as RDOM
import Data.Maybe

data Action = Increment | Decrement

type State = { counter :: Int }


initialState :: State
initialState = { counter: 0 }

render :: T.Render State _ Action
render dispatch _ state _ =
  [ RD.p' [ RD.text "Value: "
         , RD.text (show state.counter)
         ]
  , RD.p' [ RD.button [ RP.onClick \_ -> dispatch Increment ]
                    [ RD.text "Increment" ]
         , RD.button [ RP.onClick \_ -> dispatch Decrement ]
                    [ RD.text "Decrement" ]
         ]
  ]

performAction :: T.PerformAction _ State _ Action
performAction Increment _ _ = void (T.cotransform (\state -> state { counter = state.counter + 1 }))
performAction Decrement _ _ = void (T.cotransform (\state -> state { counter = state.counter - 1 }))

-- getIncrementValueFromServer :: Aff _ Int

performAction :: T.PerformAction _ State _ Action
performAction Increment _ _ = forever do
  -- Just amount <- lift getIncrementValueFromServer
  -- Just amount <- 45
  -- amount <- 1
  void $ T.cotransform $ \state -> state { counter = state.counter + 1 }
  -- void $ T.cotransform $ \state -> state { counter = state.counter + amount }

spec :: T.Spec _ State _ Action
spec = T.simpleSpec performAction render
