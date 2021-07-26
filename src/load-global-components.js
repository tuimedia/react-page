const getGlobalComponents = () => {
    const components = require.context('./components/global/', false, /[A-Z]\w+\.(js)$/);
    const loadedComponents = {};

    components.keys().forEach(fileName => {
        const componentName = fileName
          .split('/')
          .pop()
          .split('.')[0];
        loadedComponents[componentName] = require(`./components/global/${componentName}.js`).default;
      });
    return loadedComponents;
  };

  export default getGlobalComponents;