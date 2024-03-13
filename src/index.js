import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

function Header() {
  return <header>QUIZ</header>;
}

function Footer() {
  return <footer></footer>;
}

function Question(props) {
  return (
    <div>
      <h1>{props.q1}</h1>
      <label>
        <input type="radio" name={props.name} value={props.op1}></input>
        {props.op1}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op2}></input>
        {props.op2}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op3}></input>
        {props.op3}
      </label>
      <label>
        <input type="radio" name={props.name} value={props.op4}></input>
        {props.op4}
      </label>
    </div>
  );
}

function Content() {
  function getResults(event) {
    let marks = 0;
    let a = event.target.q1.value;
    let b = event.target.q2.value;
    let c = event.target.q3.value;
    let d = event.target.q4.value;
    let e = event.target.q5.value;
    let f = event.target.q6.value;
    let g = event.target.q7.value;
    let h = event.target.q8.value;
    let i = event.target.q9.value;
    let j = event.target.q10.value;
    if (a === "B. James Gosling. ") {
      marks++;
    }
    if (b === "C. Use of pointers. ") {
      marks++;
    }
    if (c === "C. JDK. ") {
      marks++;
    }
    if (d === "B. Use of pointer. ") {
      marks++;
    }
    if (e === "C. keyword. ") {
      marks++;
    }
    if (f === "D. .java. ") {
      marks++;
    }
    if (g === "D. JAVA_HOME. ") {
      marks++;
    }
    if (h === "C. Compilation. ") {
      marks++;
    }
    if (i === "B. Compile time polymorphism. ") {
      marks++;
    }
    if (j === "C. .class. ") {
      marks++;
    }
    alert("Marks: " + marks);
  }

  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q1="1. Who invented Java Programming?"
          op1="A. Guido van Rossum. "
          op2="B. James Gosling. "
          op3="C. Dennis Ritchie. "
          op4="D. Bjarne Stroustrup. "
          name="q1"
        />
        <Question
          q1="2. Which of the following is not a Java features?"
          op1="A. Dynamic. "
          op2="B. Architecture Neutral. "
          op3="C. Use of pointers. "
          op4="D. Object-oriented. "
          name="q2"
        />
        <Question
          q1="3. Which component is used to compile, debug and execute the java programs?"
          op1="A. JRE. "
          op2="B. JIT. "
          op3="C. JDK. "
          op4="D. JVM. "
          name="q3"
        />
        <Question
          q1="4. Which one of the following is not a Java feature?"
          op1="A. Object-oriented. "
          op2="B. Use of pointer. "
          op3="C. Portable. "
          op4="D. Dynamic and Extensible. "
          name="q4"
        />
        <Question
          q1="5. Which of these cannot be used for a variable name in Java?"
          op1="A. identifier & keyword. "
          op2="B. identifier. "
          op3="C. keyword. "
          op4="D. none of the mentioned. "
          name="q5"
        />
        <Question
          q1="6. What is the extension of java code files?"
          op1="A. .js. "
          op2="B. .txt. "
          op3="C. .class. "
          op4="D. .java. "
          name="q6"
        />
        <Question
          q1="7. Which environment variable is used to set the java path?"
          op1="A. MAVEN_Path. "
          op2="B. JavaPATH. "
          op3="C. JAVA. "
          op4="D. JAVA_HOME. "
          name="q7"
        />
        <Question
          q1="8. Which of the following is not an OOPS concept in Java?"
          op1="A. Polymorphism. "
          op2="B. Inheritance. "
          op3="C. Compilation. "
          op4="D. Encapsulation. "
          name="q8"
        />
        <Question
          q1="9. Which of the following is a type of polymorphism in Java Programming?"
          op1="A. Multiple polymorphism. "
          op2="B. Compile time polymorphism. "
          op3="C. Multilevel polymorphism. "
          op4="D. Execution time polymorphism. "
          name="q9"
        />
        <Question
          q1="10. What is the extension of compiled java classes?"
          op1="A. .txt. "
          op2="B. .js. "
          op3="C. .class. "
          op4="D. .java. "
          name="q10"
        />
        <br />
        <br />
        <input type="submit" value="Submit the Quizz"></input>
        <br />
        <br />
      </div>
    </form>
  );
}
