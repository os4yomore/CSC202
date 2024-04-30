# Setting Up Python Virtual Environment and Installing Requirements

This guide will walk you through the process of creating a Python virtual environment and installing dependencies from a `requirements.txt` file. Virtual environments help in isolating project dependencies, making it easier to manage different projects with conflicting requirements.

## Prerequisites

- Python installed on your system. You can download Python from [python.org](https://www.python.org/downloads/).

## Windows

### Step 1: Open Command Prompt

Open Command Prompt by searching for "cmd" in the Windows search bar and pressing Enter.

### Step 2: Create Virtual Environment

In Command Prompt, navigate to your project directory using the `cd` command:

```
cd path/to/your/project
```

Create a virtual environment by running:

```
python -m venv venv
```

### Step 3: Activate Virtual Environment

Activate the virtual environment by running:

```
venv\Scripts\activate
```

### Step 4: Install Requirements

Install the project dependencies from the `requirements.txt` file using pip:

```
pip install -r requirements.txt
```

## macOS

### Step 1: Open Terminal

Open Terminal by searching for it in Spotlight or navigating to Applications > Utilities > Terminal.

### Step 2: Create Virtual Environment

In Terminal, navigate to your project directory using the `cd` command:

```
cd path/to/your/project
```

Create a virtual environment by running:

```
python3 -m venv venv
```

### Step 3: Activate Virtual Environment

Activate the virtual environment by running:

```
source venv/bin/activate
```

### Step 4: Install Requirements

Install the project dependencies from the `requirements.txt` file using pip:

```
pip install -r requirements.txt
```

## Conclusion

You have now successfully set up a Python virtual environment and installed dependencies for your project. Remember to activate the virtual environment every time you work on your project to ensure isolation and compatibility.
