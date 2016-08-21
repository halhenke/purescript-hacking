module Data.AddressBook where

import Prelude

import Control.Plus (empty)
import Data.List (List(..), filter, head)
import Data.Maybe (Maybe)

type Entry =
  { firstName :: String
  , lastName  :: String
  , address   :: Address
  }

type Address =
  { street :: String
  , city   :: String
  , state  :: String
  }

type AddressBook = List Entry

showEntry :: Entry -> String
showEntry entry = "Hey" <> " what you have here is a " <>
                  entry.firstName <> " and " <>
                  entry.lastName <> " and " <>
                  (showAddress entry.address) <> " and...thats it!"

showAddress :: Address -> String
showAddress a = a.street <> " " <> a.city <> " " <> a.state
