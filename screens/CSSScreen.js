import { SafeAreaView } from "react-native";
import { QuizView } from "../components/QuizView";
import { Navbar } from "../components/Navbar";

const data = [
  {
      question: "What does CSS stand for?",
      options: [
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets"
      ],
      answer: "Cascading Style Sheets"
  },
  {
      question: "Which HTML attribute is used to define inline styles?",
      options: [
          "styles",
          "style",
          "class",
          "font-style"
      ],
      answer: "style"
  },
  {
      question: "How do you insert a comment in a CSS file?",
      options: [
          "// this is a comment //",
          "/* this is a comment */",
          "-- this is a comment --",
          "<!-- this is a comment -->"
      ],
      answer: "/* this is a comment */"
  },
  {
      question: "Which property is used to change the background color of an element?",
      options: [
          "color",
          "bgcolor",
          "background-color",
          "background"
      ],
      answer: "background-color"
  },
  {
      question: "How do you apply a style to all <p> elements?",
      options: [
          "p { }",
          ".p { }",
          "#p { }",
          "all.p { }"
      ],
      answer: "p { }"
  },
  {
      question: "Which property is used to change the font of an element?",
      options: [
          "font-style",
          "text-style",
          "font-family",
          "typeface"
      ],
      answer: "font-family"
  },
  {
      question: "How do you make each word in a text start with a capital letter?",
      options: [
          "text-transform: capitalize",
          "text-transform: uppercase",
          "text-style: capital",
          "font-transform: capitalize"
      ],
      answer: "text-transform: capitalize"
  },
  {
      question: "How do you select an element with the class name 'header'?",
      options: [
          ".header",
          "#header",
          "header",
          "*header"
      ],
      answer: ".header"
  },
  {
      question: "What is the default value of the 'position' property?",
      options: [
          "relative",
          "fixed",
          "absolute",
          "static"
      ],
      answer: "static"
  },
  {
      question: "What is the purpose of the z-index property in CSS?",
      options: [
          "To count the number of elements",
          "To set the magnification level of an element",
          "To specify the stack order of an element",
          "To create a zoom effect"
      ],
      answer: "To specify the stack order of an element"
  }
]

export const CSSScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F4F6FA', flex: 1 }}>
      <Navbar title="CSS" />
      <QuizView data={data} />
    </SafeAreaView>
  );
};