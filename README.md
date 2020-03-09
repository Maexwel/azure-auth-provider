# Azure Auth Provider
Sample project with an example of **how to use React-aad-msal** library to authenticate user to Azure AD.

## AuthProvider
The */src/AuthProvider.js* file is an example of an AuthProvider module to authenticate user and request token.
Here are some specificity that you should know when using react-aad-msal :
- Always provide a **/public/auth.html** blank file to handle token requests
- Tenant and App ids should be stored in **environement variables**
- The AuthProvider should better cache data in **sessionStorage** to prevent a lot of bugs
- **navigateToLoginRequestUrl** is important to prevent some bug that causes #id_token error in app
- Scopes must be set with **.default** to be more simple. Example : "https://eoneprayon.sharepoint.com/.default"
- The **LoginType** should be redirect to prevent bugs like looping
- The **tokenRefreshUri** should be the **auth.html** blank page to prevent error in console

## App Registration
To properly use an app that is connected to Azure AD, you should always make an App registration in Azure in wich you define your API needed.
In Azure, under the section *Authentication* on your app registration, you should have this configuration :
- Redirection Uri :
  - http://appUri
  - http://appUri/auth.html
- Implicit :
  - Access token
  - Id token

Don't forget the difference between **App Authentication** and **Delegate Authentication** :
- **App authentication** is used in the case of an app accessing data like a service, timerjob, ...
- **Delegate authentication** is used in the case of a user that log into your app using this app registration to then, make request