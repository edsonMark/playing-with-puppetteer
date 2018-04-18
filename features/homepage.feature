Feature:  Navigate to goole Homepage
  In order browse the web
  As I user
  I want to open google Homepage so I can browse the web.

  Scenario: add todo
    Given I am on the google Homepage
    When I enter a search term
    And I click on google search button
    Then I expect to see the search results
