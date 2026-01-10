Feature: SauceDemo Automation Tests

  Background:
    Given the user navigates to the login page

  @smoke
  Scenario Outline: Validate Login for multiple users
    When the user types "<username>" in username field
    And the user types "<password>" in password field
    And the user clicks the login button
    Then the user should be redirected to the inventory page

    Examples:
      | username                | password      |
      | standard_user           | secret_sauce  |
      | problem_user            | secret_sauce  |

 @checkout
  Scenario: Add product to cart and complete checkout
    When the user logs in with "standard_user" and "secret_sauce"
    And the user adds "Sauce Labs Backpack" to the cart
    And the user starts the checkout process
    And the user fills the checkout information
    And the user finishes the order
    Then the user should see the order completion message
    
  @logout
  Scenario: Validate Logout
    When the user logs in with "standard_user" and "secret_sauce"
    And the user clicks on the logout button
    Then the user should be redirected back to the login page