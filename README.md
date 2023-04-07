# Envixi
Envixi is a ESG management suite that allows companies to measure, manage and communicate their ESG (Environmental, Social, and Governance) performance to investors, clients, employees, and other stakeholders. The project is built using the Angular framework on the frontend, with the backend developed in Node.js and the database using MongoDB.

## Getting Started
To get started with Envixi, you will need to have the following prerequisites installed on your system:

1. Node.js
2. Angular CLI
##### You can download Node.js from nodejs.org. Once you have installed Node.js, you can install the Angular CLI by running the following command in your terminal:


      $ npm install -g @angular/cli


Once you have installed the necessary prerequisites, you will need to follow these step:

- Clone the repository: ```git clone https://github.com/envixi2023/envixi.git```

This will create a local copy of the repository on your computer.

##### Configure Environment.ts file
Next, you need to configure the environment.ts file to change the base URL for the API. This file is located in the src/environments directory of your Angular project. Open the file and replace the baseURL property with the URL of your Node backend API. For example:


```
      export const environment = {
            production: false,
            baseURL: 'http://localhost:3000/api/'
      };
```
Save the changes to the file.

To start the Angular application, run the following command in the frontend directory:

```
ng serve
```
This will start the development server on http://localhost:4200/, and you should be able to see your application in the browser.

## Dependencies
Envixi is built using Angular and relies on the following dependencies:

- Angular Material: A UI component library for Angular applications.
- Chart.js: A library for creating interactive charts and graphs.

## Contributing Code
If you would like to contribute code to our project, please follow these steps:
- Fork the repository on Github.
- Clone your fork to your local machine.
- Create a new branch for your changes.
- Make your changes and commit them to your branch.
- Push your changes to your fork on Github.
- Create a pull request to merge your changes into our project.

Before creating a pull request, please make sure your code follows our coding style and conventions, and that all tests pass.

#### Testing
If you would like to help test our project, you can do so by downloading the latest release and running the tests. If you encounter any issues, please report them on Github.
#### Documentation
If you would like to contribute to our project's documentation, you can do so by submitting a pull request with your changes. Please make sure your documentation is clear and concise, and that it follows our style and conventions.

## Code of conduct
Welcome to Envixi! We believe that open collaboration and a respectful community are the keys to creating great software. To ensure that everyone feels safe and respected, we ask that all contributors and users follow our code of conduct.
Our code of conduct is inspired by the Contributor Covenant (https://www.contributor-covenant.org), version 2.1, which is a widely used code of conduct in the open source community.
Please read and follow these guidelines when participating in our community:
- Be respectful and considerate. We welcome and celebrate diversity in our community and expect everyone to treat others with respect and empathy, regardless of their race, ethnicity, gender, sexual orientation, age, religion, or any other personal characteristic.
- Communicate clearly and constructively. Avoid using language or behavior that could be perceived as harassing, threatening, or demeaning. Critique ideas, not people, and provide constructive feedback that helps the community grow and improve.
- Respect confidentiality. Do not share any private or sensitive information that you may have access to as part of your participation in the project.
- Take responsibility for your actions. If you make a mistake or cause harm, own up to it and take steps to make things right.
- Report any violations. If you witness or experience any behavior that violates this code of conduct, please report it to the project maintainers as soon as possible.
By following these guidelines, we can create a welcoming and inclusive community where everyone feels comfortable contributing their ideas and skills. We thank you for being a part of our project, and we look forward to collaborating with you!



## License
Envixi is released under the MIT License.




