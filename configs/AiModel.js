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
    

    export const GenerateStudyTypeContentAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate the flashcard on topic: Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation in JSON format with front-back content, Maximum 15 cards"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"front\": \"What is a Widget in Flutter?\",\n    \"back\": \"A Widget is the basic building block of a Flutter app's UI. It describes a part of the user interface and can be a button, text, image, or layout element.\"\n  },\n  {\n    \"front\": \"What is the difference between a StatelessWidget and a StatefulWidget?\",\n    \"back\": \"A StatelessWidget is immutable and cannot change its internal state. A StatefulWidget can change its internal state and rebuild its UI accordingly. StatefulWidgets are used for dynamic elements.\"\n  },\n   {\n    \"front\": \"What is the purpose of the `build()` method in a Widget?\",\n    \"back\": \"The `build()` method in a Widget is responsible for describing the part of the user interface represented by that Widget. It returns a Widget tree.\"\n  },\n  {\n    \"front\": \"What is the role of the `MaterialApp` widget?\",\n     \"back\": \"The `MaterialApp` widget is the root widget for applications using Material Design. It sets up theme, navigation, and other basic configurations for your app.\"\n  },\n  {\n     \"front\": \"What is a `Scaffold` widget used for?\",\n     \"back\": \"The `Scaffold` widget implements the basic Material Design visual layout structure. It provides app bars, drawers, bottom navigation bars, and more.\"\n  },\n  {\n    \"front\": \"How do you create a basic Text widget?\",\n    \"back\": \"Use `Text('Your text here')`. You can customize it using style properties like `style: TextStyle(fontSize: 20)`.\"\n  },\n  {\n     \"front\": \"How do you display an image in Flutter?\",\n    \"back\": \"Use the `Image` widget. For example: `Image.asset('assets/my_image.png')` for local assets or `Image.network('https://example.com/my_image.jpg')` for images from the internet.\"\n  },\n   {\n    \"front\": \"What are the common layout widgets in Flutter?\",\n    \"back\": \"Common layout widgets include `Row`, `Column`, `Container`, `Padding`, `Center`, `Expanded`, and `Stack`.\"\n  },\n  {\n     \"front\": \"What does the `Row` widget do?\",\n    \"back\": \"The `Row` widget arranges its children in a horizontal line.\"\n  },\n  {\n    \"front\": \"What does the `Column` widget do?\",\n     \"back\": \"The `Column` widget arranges its children in a vertical line.\"\n  },\n   {\n    \"front\": \"What is the `Navigator` used for in Flutter?\",\n    \"back\": \"The `Navigator` manages app navigation, allowing you to push new screens onto the navigation stack (like showing new pages) and pop back to previous ones.\"\n  },\n   {\n    \"front\": \"How do you navigate to a new screen?\",\n     \"back\": \"Use `Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))` to navigate to `NewScreen`. \"\n  },\n   {\n    \"front\": \"How do you go back to the previous screen?\",\n    \"back\":\"Use `Navigator.pop(context)` to return to the previous screen.\"\n  },\n  {\n    \"front\": \"What is a 'route' in Flutter?\",\n    \"back\": \"A route is essentially a page or screen within your Flutter app. Each route represents a unique UI that the user can navigate to.\"\n  },\n  {\n    \"front\":\"How do you handle basic user input like button clicks?\",\n     \"back\":\"Use the `onPressed` parameter of widgets like `ElevatedButton` to define an action to perform when the button is clicked.\"\n  }\n\n]\n```"},
          ],
        },
      ],
    });

    export const GenerateQuizAiModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Quiz on topic: <Chapters> with Question and Options along with correct answer in JSON format. Make sure that the value must be JSON serializable when trying to do NextResponse.json(result[0]) on it. (Max 10 quizzes)"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"quiz\": [\n    {\n      \"id\": 1,\n      \"question\": \"What is the main purpose of a chapter in a book?\",\n      \"options\": [\n        \"To confuse the reader\",\n        \"To provide a break from reading\",\n         \"To divide the book into sections with a common theme or topic\",\n        \"To make the book longer\"\n      ],\n      \"correctAnswer\": \"To divide the book into sections with a common theme or topic\"\n    },\n    {\n      \"id\": 2,\n        \"question\": \"What is the typical structure of a chapter in a novel?\",\n        \"options\": [\n          \"Introduction, Body, Conclusion\",\n          \"Table of Contents, Index, Glossary\",\n          \"Title, Author, Copyright\",\n          \"Preface, Prologue, Epilogue\"\n        ],\n        \"correctAnswer\": \"Introduction, Body, Conclusion\"\n    },\n    {\n      \"id\": 3,\n      \"question\": \"In academic writing, what does a chapter often represent?\",\n      \"options\": [\n        \"A completely independent research paper\",\n        \"A collection of loosely related ideas\",\n        \"A single, focused aspect of the larger topic\",\n        \"A fictional story within the main text\"\n       ],\n      \"correctAnswer\": \"A single, focused aspect of the larger topic\"\n    },\n     {\n      \"id\": 4,\n      \"question\": \"Which of these is LEAST likely to be the title of a chapter?\",\n        \"options\": [\n          \"The Rise of the Empire\",\n          \"Methodology and Data\",\n           \"A Day at the Beach\",\n          \"Appendix A\"\n        ],\n        \"correctAnswer\": \"Appendix A\"\n    },\n    {\n      \"id\": 5,\n       \"question\": \"What is the function of chapter headings?\",\n        \"options\": [\n          \"To confuse the reader\",\n          \"To summarize the entire book\",\n           \"To give a brief indication of the chapter's subject\",\n          \"To show the author's writing style\"\n        ],\n        \"correctAnswer\": \"To give a brief indication of the chapter's subject\"\n    },\n     {\n      \"id\": 6,\n      \"question\": \"In a cookbook, a chapter might be organized by:\",\n        \"options\": [\n          \"The color of the food\",\n          \"The author's favorite recipes\",\n          \"Type of dish (e.g., appetizers, main courses, desserts)\",\n          \"The alphabet\"\n        ],\n        \"correctAnswer\": \"Type of dish (e.g., appetizers, main courses, desserts)\"\n    },\n    {\n      \"id\": 7,\n        \"question\": \"What is a common characteristic of the conclusion of a chapter?\",\n        \"options\": [\n          \"Introduction of new characters\",\n          \"A summary of the main points covered in the chapter\",\n          \"A cliffhanger\",\n          \"A random piece of information\"\n        ],\n        \"correctAnswer\": \"A summary of the main points covered in the chapter\"\n    },\n    {\n     \"id\": 8,\n      \"question\": \"How can the chapter structure help a reader navigate a complex book?\",\n      \"options\": [\n        \"By making the book more confusing\",\n        \"By presenting ideas in a logical sequence\",\n        \"By hiding important information\",\n         \"By skipping over details\"\n      ],\n      \"correctAnswer\": \"By presenting ideas in a logical sequence\"\n    },\n     {\n      \"id\": 9,\n      \"question\": \"What might a chapter in a history book focus on?\",\n        \"options\": [\n          \"A specific historical event or period\",\n           \"A collection of random stories\",\n          \"A single fictional character\",\n          \"The author's personal anecdotes\"\n        ],\n      \"correctAnswer\": \"A specific historical event or period\"\n    },\n     {\n      \"id\": 10,\n        \"question\": \"What is a potential benefit of well-defined chapters for the writer?\",\n          \"options\": [\n            \"Making the writing process more chaotic\",\n            \"Helping to organize and develop their ideas\",\n            \"Creating a boring reading experience\",\n            \"Making the book difficult to read\"\n           ],\n          \"correctAnswer\": \"Helping to organize and develop their ideas\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });

    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());