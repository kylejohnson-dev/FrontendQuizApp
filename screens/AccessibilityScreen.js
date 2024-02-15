import { SafeAreaView } from "react-native";
import { QuizView } from "../components/QuizView";
import { Navbar } from "../components/Navbar";

const data = [
  {
    question: "What does 'WCAG' stand for?",
    options: [
        "Web Content Accessibility Guidelines",
        "Web Compliance Accessibility Guide",
        "Web Content Accessibility Goals",
        "Website Compliance and Accessibility Guidelines"
    ],
    answer: "Web Content Accessibility Guidelines"
  },
  {
      question: "Which element is used to provide alternative text for images for screen reader users?",
      options: [
          "<alt>",
          "<figcaption>",
          "<description>",
          "<img alt='description'>"
      ],
      answer: "<img alt='description'>"
  },
  {
      question: "What does ARIA stand for in web development?",
      options: [
          "Accessible Rich Internet Applications",
          "Advanced Responsive Internet Assistance",
          "Accessible Responsive Internet Applications",
          "Automated Responsive Internet Actions"
      ],
      answer: "Accessible Rich Internet Applications"
  },
  {
      question: "Which of the following is not a principle of the WCAG?",
      options: [
          "Perceivable",
          "Dependable",
          "Operable",
          "Understandable"
      ],
      answer: "Dependable"
  },
  {
      question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
      options: [
          "3:1",
          "4.5:1",
          "7:1",
          "2:1"
      ],
      answer: "4.5:1"
  },
  {
      question: "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
      options: [
          "<div>",
          "<span>",
          "<a href='...'>",
          "<p>"
      ],
      answer: "<a href='...'>"
  },
  {
      question: "What is the purpose of the 'lang' attribute in an HTML page?",
      options: [
          "To specify the scripting language",
          "To define the character set",
          "To indicate the language of the page content",
          "To declare a language pack"
      ],
      answer: "To indicate the language of the page content"
  },
  {
      question: "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
      options: [
          "Keyboard Accessible",
          "Mouse Independence",
          "Device Independence",
          "Operable Controls"
      ],
      answer: "Keyboard Accessible"
  },
  {
      question: "What is the role of 'skip navigation' links in web accessibility?",
      options: [
          "To skip over primary navigation to the main content",
          "To provide shortcuts to different sections of the website",
          "To help users skip unwanted sections like advertisements",
          "To bypass broken links in the navigation"
      ],
      answer: "To skip over primary navigation to the main content"
  },
  {
      question: "Which of these tools can help in checking the accessibility of a website?",
      options: [
          "W3C Validator",
          "Google Lighthouse",
          "CSS Validator",
          "JavaScript Console"
      ],
      answer: "Google Lighthouse"
  }
]

export const AccessibilityScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F4F6FA', flex: 1 }}>
      <Navbar title="Accessibility" />
      <QuizView data={data} />
    </SafeAreaView>
  );
};