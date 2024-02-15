import { SafeAreaView } from "react-native";
import { QuizView } from "../components/QuizView";
import { Navbar } from "../components/Navbar";

const data = [
  {
    question: "Which syntax is correct to output 'Hello World' in an alert box?",
    options: [
        "alertBox('Hello World');",
        "msg('Hello World');",
        "alert('Hello World');",
        "msgBox('Hello World');"
    ],
    answer: "alert('Hello World');"
  },
  {
      question: "How do you call a function named 'myFunction'?",
      options: [
          "call function myFunction()",
          "call myFunction()",
          "myFunction()",
          "execute myFunction()"
      ],
      answer: "myFunction()"
  },
  {
      question: "How to write an IF statement in JavaScript?",
      options: [
          "if i = 5 then",
          "if (i == 5)",
          "if i == 5",
          "if i = 5"
      ],
      answer: "if (i == 5)"
  },
  {
      question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: [
          "if (i <> 5)",
          "if i =! 5 then",
          "if (i != 5)",
          "if i not = 5"
      ],
      answer: "if (i != 5)"
  },
    {
      question: "How does a FOR loop start?",
      options: [
          "for (i = 0; i <= 5)",
          "for i = 1 to 5",
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5; i++)"
      ],
      answer: "for (i = 0; i <= 5; i++)"
  },
  {
      question: "How can you add a single-line comment in JavaScript?",
      options: [
        "'This is a single-line comment",
        "//This is a single-line comment",
        "<!--This is a single-line comment-->",
        "/* This is a single-line comment */"
      ],
      answer: "//This is a single-line comment"
  },
  {
      question: "What is the correct way to write a JavaScript array?",
      options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
      ],
      answer: "var colors = ['red', 'green', 'blue']"
  },
  {
      question: "How do you find the number with the highest value of x and y?",
      options: [
          "Math.ceil(x, y)",
          "top(x, y)",
          "Math.max(x, y)",
          "Math.highest(x, y)"
      ],
      answer: "Math.max(x, y)"
  },
  {
      question: "Which operator is used to assign a value to a variable?",
      options: [
          "-",
          "*",
          "=",
          "x"
      ],
      answer: "="
  },
  {
      question: "What is the correct way to write a JavaScript object?",
      options: [
          "var person = {firstName: 'John', lastName: 'Doe'};",
          "var person = {firstName = 'John', lastName = 'Doe'};",
          "var person = (firstName: 'John', lastName: 'Doe');",
          "var person = (firstName = 'John', lastName = 'Doe');"
      ],
      answer: "var person = {firstName: 'John', lastName: 'Doe'};"
  }
]

export const JavaScriptScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F4F6FA', flex: 1 }}>
      <Navbar title="JavaScript" />
      <QuizView data={data} />
    </SafeAreaView>
  );
};