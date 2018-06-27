Feature: As a user
 I navigate to the Austrain store
 I should see New Zealand Dollars

Scenario: Display Australian Dollars
  Given I am on the asos Homepage
  And I Navigate to the Australian Store
  When I search for purple t shirts
  Then I should see New Zealand Dollars
