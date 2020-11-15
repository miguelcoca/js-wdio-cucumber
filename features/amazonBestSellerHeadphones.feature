Feature: Amazon Best Sellers Headphones Challenge
  As a Amazon Store Customer I want to be able to get Information  
  About the Best Selling Headphones in the Store so that allows me to make buying desitions based on that Information.

  Background: I am in Amazon Store page
    Given I am in Amazon Store Home Page

    Scenario: As a amazon user I want to know which are the Best Selling Headphones
        Given I browse to the Amazon Best Sellers page
        When I browse for headphones category from the departments TOC
        Then I should see "Best Sellers in Audio Headphones" entitled details result page

    Scenario: As a amazon user I want to search for Headphones
        When I search for "pioneer headphones"
        Then I should see "pioneer headphones" in the result page