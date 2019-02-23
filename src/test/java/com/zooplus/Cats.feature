Feature: sample feature
  Background: Area to define variables used in the scenarios of this file
    * def catName = 'Neo'

  Scenario: Greet the cat
    Given def greet = 'Guten morgen '
    Then print greet + catName