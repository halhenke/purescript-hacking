module Main where

import Prelude
import Data.AddressBook
import UI.Spounter
import React as R
import React.DOM as RD
import React.DOM.Props as RDP
import ReactDOM as RDOM
import Thermite as T
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (logShow, CONSOLE, log)
import React (ReactProps, getProps)

main :: forall eff. Eff (console :: CONSOLE | eff) Unit
main = do
  log "Hello sailor!"
  -- log (showEntry eddy) where
  --   eddy = { firstName: "Lionel", lastName: "Hutz", address: addy }
  --   addy = { street: "123 Fake St.", city: "Faketown", state: "CA" }
  let addy = { street: "123 Fake St.", city: "Faketown", state: "CA" }
  let eddy = { firstName: "Lionel", lastName: "Hutz", address: addy }
  log (showEntry eddy)
      -- logShow showAddress addy
      -- log ("fuck you")
      -- logShow showAddress addy
  -- log ("Monkey")

  -- RD.body >>= RDOM.render (R.createFactory (component { apple: "bee"}))
  -- let a = {b: "pop"} :: ReactProps
  -- let a :: State
  -- let a = {counter: 23} :: State
  -- RD.body >>= RDOM.render (R.createFactory initialState)
  -- RD.body >>= RDOM.render (R.createFactory (component a)) where
  -- a = {counter: 2 :: Int}
  -- RD.body >>= RDOM.render (R.createFactory (component {counter: 23}))

  let component = (T.createClass spec initialState)
  RD.body >>= RDOM.render (R.createFactory (component {}))
