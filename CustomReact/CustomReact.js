function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for( let attr in reactElement.props){
        let val = reactElement.props[attr];
        domElement.setAttribute(attr, val);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer)