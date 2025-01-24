const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

  const generationConfig2 = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
    export const courseOutlineAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a study material for Python for Exam and level of difficulty  will be Easy with summary of course, List of Chapters along with a summary for each chapter, Topic list in each chapter. All result in  JSON format\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_title\": \"Python Fundamentals for Exams (Easy Level)\",\n  \"course_summary\": \"This course provides a beginner-friendly introduction to Python programming, covering fundamental concepts essential for understanding and applying Python in basic problem-solving. It focuses on building a strong foundation in syntax, data types, control flow, and basic data structures, preparing students for introductory-level Python exams.\",\n  \"difficulty_level\": \"Easy\",\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"Introduction to Python\",\n      \"chapter_summary\": \"This chapter introduces the core concepts of Python, including its history, features, advantages, and setting up the Python environment. It also covers the basic syntax and structure of a Python program and how to execute Python scripts.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"History and Features of Python\",\n        \"Advantages and Disadvantages of Python\",\n        \"Setting up Python Environment (Installation)\",\n        \"Python Interpreter and Execution\",\n        \"Basic Python Syntax\",\n        \"Comments in Python\",\n        \"First Python Program (Hello, World!)\"\n      ]\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"Data Types and Variables\",\n      \"chapter_summary\": \"This chapter explains fundamental data types in Python, such as integers, floats, strings, and booleans. It also covers variables, variable assignment, and how to perform basic arithmetic operations.\",\n      \"topics\": [\n        \"Data Types: Integers, Floats, Strings, Booleans\",\n        \"Variables: Declaration and Assignment\",\n        \"Naming Conventions for Variables\",\n        \"Basic Arithmetic Operators (+, -, *, /, %)\",\n        \"Type Conversion (Casting)\",\n        \"String Manipulation (Concatenation, Indexing, Slicing)\",\n        \"Formatted Output using f-strings\"\n      ]\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"Input and Output\",\n      \"chapter_summary\": \"This chapter focuses on how to receive input from the user and display output in Python. It covers the `input()` function for reading user input and the `print()` function for displaying output.\",\n      \"topics\": [\n        \"The `input()` Function\",\n        \"Prompting the User for Input\",\n        \"The `print()` Function\",\n        \"Formatting Output with `print()`\",\n        \"Using Separators and Endings in `print()`\",\n        \"Reading Input as Strings and Converting to Other Data Types\"\n      ]\n    },\n    {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Control Flow: Conditional Statements\",\n      \"chapter_summary\": \"This chapter introduces conditional statements, which allow you to control the flow of execution based on conditions. It covers `if`, `elif`, and `else` statements for making decisions in your code.\",\n      \"topics\": [\n        \"Boolean Expressions and Logical Operators (and, or, not)\",\n        \"The `if` Statement\",\n        \"The `else` Statement\",\n        \"The `elif` Statement\",\n        \"Nested `if` Statements\",\n        \"Conditional Operators (>, <, >=, <=, ==, !=)\"\n      ]\n    },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"Control Flow: Loops\",\n      \"chapter_summary\": \"This chapter explains how to use loops to repeat a block of code multiple times. It covers `for` and `while` loops and how to control loop execution using `break` and `continue` statements.\",\n      \"topics\": [\n        \"The `for` Loop\",\n        \"Iterating over Sequences (Strings, Lists)\",\n        \"The `range()` Function\",\n        \"The `while` Loop\",\n        \"Loop Control: `break` Statement\",\n        \"Loop Control: `continue` Statement\",\n        \"Nested Loops\"\n      ]\n    },\n    {\n      \"chapter_number\": 6,\n      \"chapter_title\": \"Lists\",\n      \"chapter_summary\": \"This chapter introduces lists, a fundamental data structure in Python. It covers creating lists, accessing elements, modifying lists, and common list operations.\",\n      \"topics\": [\n        \"Creating Lists\",\n        \"Accessing List Elements (Indexing)\",\n        \"Slicing Lists\",\n        \"List Methods (append, insert, remove, pop, index, count, sort)\",\n        \"List Comprehension (Introduction)\",\n        \"Iterating over Lists\",\n        \"List Length (`len()` function)\"\n      ]\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  

    export const generateNotesAiModel = model.startChat({
      generationConfig2,
      
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());