
Feature('login and acc.');

Scenario('test something', ({ I }) => {

    I.amOnPage('https://www.instagram.com/');
    I.see('Instagram', 'h1');
    I.fillField('Phone number, username, or email', 'studpofun');
    I.fillField('Password', '123ramakod');
    I.click('Log In');
    I.wait('Log In'); 
   

});

