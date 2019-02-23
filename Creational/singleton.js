/* 
 Singleton pattern is actually considered an anti-pattern and overuse of it should be avoided. It is not necessarily bad and could have some valid use-cases but should be used with caution because it introduces a global state in your application and change to it in one place could affect in the other areas and it could become pretty difficult to debug. The other bad thing about them is it makes your code tightly coupled plus it mocking the singleton could be difficult.

 */

// In javascript, singletons can be implemented using the module pattern.

const president = (function() {
  const nuclearCode = 'AURB#^#(76324hdgdi_+32ydbdiTUWBD';
  const name = 'Donald Trump';

  const getName = () => name;

  return {
    getName,
  };
})();

president.getName(); // Donald Trump
president.nuclearCode; // undefied
