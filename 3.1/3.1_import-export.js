import minus from './minus';
/*
Diffrence between require and import

---require

*Require is Non-lexical, it stays where they have put the file.
*It can be called at any time and place in the program.
*You can directly run the code with require statement.
*If you want to use require module then you have to save file with ‘.js’ extension.

---import

*Import is lexical, it gets sorted to the top of the file.
*It can’t be called conditionally, it always run in the beginning of the file.
* To run a program containing import statement you have to use experimental module feature flag.

*/
console.log(minus);