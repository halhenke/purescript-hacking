module Main where

import Prelude
import Data.AddressBook
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (logShow, CONSOLE, log)

main :: forall e. Eff (console :: CONSOLE | e) Unit
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
