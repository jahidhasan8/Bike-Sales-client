import React from 'react';

const Blog = () => {
    return (
        <div className='p-4 '>

            <div className=' w-full md:mx-auto  border-2 border-solid  rounded-md p-4 shadow-lg mb-6 '>
                <h5 className='font-bold p-2'>
                    1. What are the different ways to manage a state in a React application?
                </h5>
                <p><span>In React apps, there are at least seven ways to handle the state. Let explore a few of them. <br /> <br />  <strong>URL: </strong> Keeping data in the URL allows users to share deep links with others.

                    It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change. React Router is a great tool to handle routes and manage the params.<br /> <br />  <strong>Web Storage: </strong> The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.

                    Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.

                    We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.<br /> <br />  <strong>Local State: </strong> The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc. <br /> <br />  <strong>Lifted State: </strong> The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. <br /> <br />  <strong>Derived State: </strong> The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.Well, deriving the state avoids our state values getting out of sync. It simplifies our code since we do not have to remember to keep separate values in sync. When we update the state, derived values are automatically recalculated in the render.</span></p>
            </div>
            <div className=' w-full md:mx-auto border-2 border-solid  rounded-md p-4 shadow-lg mb-6  '>
                <h5 className='font-bold p-2'>
                    2. How does prototypical inheritance work?
                </h5>
                <p><span> prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.Specifically, prototypes and prototypical inheritance are commonly used in many web application frameworks, such as AngularJS, to allow sharing of common behavior and state among similar components. <br /> <br />All constructor functions in JavaScript have a special property called prototype, which works with the new operator. The reference to the prototype object is copied to the internal [[Prototype]] property of the new instance. For example, when you do const a1 = new A(), JavaScript (after creating the object in memory and before running function A() with this defined to it) sets a1.[[Prototype]] = A.prototype. When you then access properties of the instance, JavaScript first checks whether they exist on that object directly, and if not, it looks in [[Prototype]]. [[Prototype]] is looked at recursively, i.e. a1.doSomething, Object.getPrototypeOf(a1).doSomething, Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething etc., until it's found or Object.getPrototypeOf returns null. This means that all properties defined on prototype are effectively shared by all instances, and you can even later change parts of prototype and have the changes appear in all existing instances.</span></p>
            </div>
            <div className=' w-full md:mx-auto border-2 border-solid rounded-md p-4 shadow-lg'>
                <h5 className='font-bold p-2'>
                    3. What is a unit test? Why should we write unit tests?
                </h5>
                <p><span>Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.A unit is a single testable part of a software system and tested during the development phase of the application software.The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.Whenever the application is ready and given to the Test engineer, he/she will start checking every component of the module or module of the application independently or one by one, and this process is known as Unit testing  <br /> <br /> In a testing level hierarchy, unit testing is the first level of testing done before integration and other remaining levels of the testing. It uses modules for the testing process which reduces the dependency of waiting for Unit testing frameworks, stubs, drivers and mock objects are used for assistance in unit testing.Generally, the software goes under four level of testing: Unit Testing, Integration Testing, System Testing, and Acceptance Testing but sometimes due to time consumption software testers does minimal unit testing but skipping of unit testing may lead to higher defects during Integration Testing, System Testing, and Acceptance Testing or even during Beta Testing which takes place after the completion of software application.</span></p>
            </div>
            <div className=' w-full md:mx-auto border-2 border-solid rounded-md p-4 shadow-lg'>
                <h5 className='font-bold p-2'>
                    4. React vs. Angular vs. Vue?
                </h5>
                <p><span><strong>Architecture</strong> <br /> <br /> Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming:

                    Templates based on HTML;
                    Dependency injection;
                    Ajax requests; Routing;
                    Encapsulation of CSS components;
                    Components testing utilities;
                    Opportunities to create forms, etc.

                    <br /> <br /> React.js, on the other hand, is a library that just offers the view, leaving the developer to decide how to construct the Model and Controller. The following features are provided:

                    As an add-on to JavaScript, the JSX language, which is similar to XML, is used instead of templates;

                    No introduction of dependencies;

                    Ajax requests;

                    <br /> <br /> Vue.js is a library that allows you to create interactive web interfaces. Vue.js is primarily concerned with the ViewModel layer of the MVVM architecture. It uses two-way data bindings to attach the View and the Model. Directives and Filters abstract away the actual DOM operations and output formatting. <br /><br /><strong>Data Binding</strong><br /> Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. The interface element changes as the model’s state changes, which is why two-way data binding is used.

                    <br /> <br /> React.js has one-way binding. First, the state of the model is updated, and then it reflects the change of the interface element. If you change the interface element, the state of the model stays the same.

                    <br /><br /> As on Angular, the data binding on Vue.js is two-way. Vue.js synchronizes the entire model with the DOM mechanically. This implies that all Vue.js templates are fundamentally legal, parsable HTML with a few extra features. Remember this because Vue templates are fundamentally different from string-based templates. <br /><br /><strong>Ease of learning</strong><br /> In the case of React.js, you need to learn JSX first, which is not a problem since it’s quite simple. Then you need to go through the routing library (react-router v4, for example) and then the state management libraries (Redux or MobX).

                    <br /><br /> In the case of Angular, there are way more steps to make and information to learn. From basic terms (directives, modules, decorators, components, services, dependency inputs, pipes, and templates), this is followed by topics as change detection, zones, AoT compilation, and Rx.js.

                    <br /><br />  And in the case of Vue.js, the fundamental features may be implemented in the first web applications in the least amount of time. Vue is simpler to understand than Angular or React since it is more adaptable. Furthermore, Vue’s functionality, such as the use of components, overlaps with that of Angular and React. Vue.js’s simplicity and adaptability, on the other hand, have a drawback: it enables poor code that is tough to debug and test. <br /><br /><strong>Syntax</strong><br /> Angular is written in TypeScript, which means you need some time to learn it to work with this framework.

                    <br /><br /> React uses JSX and native Javascript developers are familiar with it. The training period is easier and does not require that much preparation.

                    <br /><br /> Vue.js makes use of an HTML-based template syntax that allows you to link the displayed DOM to the data of the base element instance declaratively. All Vue.js templates are valid HTML that can be read by HTML analyzers and browsers that follow the standard. <br /><br /><strong>Performance</strong><br />
                    To capture all changes to the DOM, Angular.js creates a watcher for each binding. Every time the view updates, the new values compare with the old ones. This can end up in poorer performance in large mobile applications.

                   <br /><br /> React uses a virtual DOM, when the view is modified, the new DOM compares it to the virtual DOM and changes accordingly.

                   <br /><br /> Vue.js has better performance thanks to the virtual DOM, which is useful for complicated programs. It may be as little as 20KB while maintaining its speed and versatility, allowing it to achieve considerably better performance than competing frameworks.</span></p>
            </div>

        </div>
    );
};

export default Blog;