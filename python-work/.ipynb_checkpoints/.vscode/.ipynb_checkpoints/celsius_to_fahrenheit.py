# # # # Write a function `square(num)` that returns the square of a number
# # def greetings():
# #     print("hello dear")
# # def squire_of_num(number):
# #     squire=number*number
# #     return squire
# # greetings()
# # num=int(input('eneter a number:'))
# # r=squire_of_num(num)
# # print(f'the squire of number is {r}')
# # # Write a function `greet_user(name)` that prints a welcome message for the given name.
# # def add2num(a,b):
# #     sum=a+b
# #     return sum
# # add=add2num(85,65)   
# # print(add) 
# # Write a function `area_of_circle(radius)` that returns the area of a circle. (Use π = 3.1416)
# # def area_of_circle(radius):
# #     area= 3.141*radius**2
# #     return area
# # def circuference_of_cirle(radius):
# #     perimeter=2*3.1416*radius
# #     return perimeter
# # r=int(input("enter radius of cirle in cm:"))
# # a=area_of_circle(r)
# # p=circuference_of_cirle(r)
# # print(f'Area of circle is {a:2f} sqr/cm and its perimeter is {p:2f} cm')
# #Write a function `is_even(num)` that returns `True` if the number is even, otherwise `False`.
# # def is_even(number):
# #     if number%2==0:
# #         return "True"
# #     else:
# #         return False
# # x=int(input("enter a number:"))
# # num=is_even(x)
# # print(num)
# # 6. Write a function `factorial(n)` that returns the factorial of a given number.
# # def reverse_strings(string):
# #      return string[::-1]
# # print(reverse_strings("avnish"))
# # 9. Write a function `count_vowels(s)` that returns the number of vowels in a string.
# # Simple Python Calculator (A, S, M, D, Average)

# # def add(a, b):
# #     return a + b

# # def subtract(a, b):
# #     return a - b

# # def multiply(a, b):
# #     return a * b

# # def divide(a, b):
# #     if b == 0:
# #         return "Error! Division by zero."
# #     return a / b

# # def average(a, b):
# #     return (a + b) / 2

# # print("Simple Calculator")
# # print("Select operation:")
# # print("1. Addition")
# # print("2. Subtraction")
# # print("3. Multiplication")
# # print("4. Division")
# # print("5. Average")

# # choice = input("Enter choice (1/2/3/4/5): ")

# # try:
# #     num1 = float(input("Enter first number: "))
# #     num2 = float(input("Enter second number: "))
# # except ValueError:
# #     print("Invalid input! Please enter numbers only.")
# #     exit()

# # if choice == '1':
# #     print(f"Result: {add(num1, num2)}")
# # elif choice == '2':
# #     print(f"Result: {subtract(num1, num2)}")
# # elif choice == '3':
# #     print(f"Result: {multiply(num1, num2)}")
# # elif choice == '4':
# #     print(f"Result: {divide(num1, num2)}")
# # elif choice == '5':
# #     print(f"Result: {average(num1, num2)}")
# # else:
# #     print("Invalid choice!")
# def add(a,b):
#     return a + b
# def sub(a,b):
#     return a - b
# def multiply(a,b):
#     return a * b
# def divide(a,b):
#     if b==0:
#      print("divided by zero is undefined ")
#     return a / b
# def avg(a,b):
#     return (a + b)/2
# def sqr_sum(a,b):
#     return a*a + b*b
# print("1.addition\n\
#       2.substraction\n\
#       3.multiplication\n\
#       4.division\n\
#       5.average\n\
#       6.square sum of the number")
# Select=(int(input("Enter a number for operation 1 to 5: ")))
# try:
#     x=float(input("Enter 1st number: "))
#     y=float(input("Enter 2nd number: "))
# except ValueError:
#     print("lawde Sahi se number enter kr ")
#     exit()
# if Select==1:
#     print(f'{x} + {y}',"=",add(x,y))   
# elif Select==2:
#     print(f'{x} - {y}',"=",sub(x,y)) 
# elif Select==3:
#     print(f'{x} x {y}',"=",multiply(x,y))     
# elif Select==4:
#     print(f'{x} / {y}',"=",divide(x,y))  
# elif Select==5:
#     print(f'{x} + {y}',"/","2","=",avg(x,y))        
# elif Select==6:
#     print(f'Squires of both numbbers is :',"=",sqr_sum(x,y))   
# else:
#     print("behenchod,Dhayan se operator enter kr ")      
#function arguments and it's types
       #function arguments are the value that you passed into a function ,so it can performs its task with those values
# def   greetings(name): #Required arg
#     print(f'Hello {name} !') 
# name=input("Enter your name:")
# # print(greetings(name))
# greetings(name)
# 2. DEFAULT ARGUMENTS - YOU CAN ASSIGN DEFAULT VALUE TO ARGUMENTS IN A FUNCTION DEFINATION 
#IF THE ALUE ISN'T PROIDED ,THEN THE FUCTION IS CALLLED ,THE DEFAULT VALUE IS USED .
# EXAMPLE: FUNCTION DEFINED USING ONE PARAMETER & DEFAULT VALUE
# def greetings(name="Dear",course=" SQL"):
#     print(f'Hello {name} ,How are you today\n lets practice{course}')
# name=input("Enter your name:")
# c=input("Enter your course:")
# greetings(name, c)
# def greetings(name="Dear", course=" SQL"):
#     print(f'Hello {name}, How are you today\nLets practice {course}')

# # Take user input
# user_name = input("Enter your name: ")
# user_course = input("Enter your course: ")

# # Decide whether to pass or not
# if not user_name and not user_course:
#     greetings()  # both default
# elif not user_name:
#     greetings(course=user_course)  # default name
# elif not user_course:
#     greetings(name=user_name)  # default course
# else:
# #     greetings(user_name, user_course)  # both provided
# name=input("enter name:")
# age=int(input("enter age:"))
# print("My name is %s and age is %d"%(name,age))#old style formattiing
# #%s and %d ar place holders for the strings and integer
# name=input("enter name:")
# age=int(input("enter age:"))
# print("My name is {} and age is {}".format(name,age))#.FORMATE METHOD
# print("My name is {1} and age is {0}".format(name,age))#INDEXING METHOD
# print(f"My name is {name} and age is {age}") #f-strings method (most efficient and reliable)
# print(f"My name is {name} and your age after 4 year will be: {age+4}") 
# #escape charactors using "\"
# print("\"hello  dear\"")
# print("hii\navnish")#add new line
# print("hii\tavnish")
# print(r"Hello\nWorld")
# Output: Hello\nWorld (no new line)
# | Escape Sequence | Meaning                                | Example                                |
# | --------------- | -------------------------------------- | -------------------------------------- |
# | `\ooo`          | Character with octal value             | `"\101"` → A                           |
# | `\xhh`          | Character with hex value               | `"\x41"` → A                           |
# | `\uXXXX`        | Unicode character (16-bit)             | `"\u03A9"` → Ω                         |
# | `\UXXXXXXXX`    | Unicode character (32-bit)             | `"\U0001F600"` → 😀                    |
# | `\N{name}`      | Unicode character by its official name | `"\N{GREEK CAPITAL LETTER DELTA}"` → Δ |
#loops enables you to perform repetitive tasks efficiently without writing reduntant codes .they iterate over asequence 
#like(list,tuple strings & range) or execute a block of code as long as condition is met
#TYPES-while loop-for loop-nested loop
#while loop 
#repeatedly executes a block of code as long as a given condition remains TRUE 
#it check the condition before each iteration
#print numbers 0 to 70
# count=0  #DECLARE A VARIABLE TO STORE RESULT
# while count<1:
#     print(count)
#     count+=1
# '''🔹 Practice Questions (For Loop – Beginner)

# Print numbers from 1 to 10.

# for i in range(50):
#     print("number:",i)
#     i+=1

# # Print the square of numbers from 1 to 10.
# for i in range(0,100):
#     print(f'squar of number{i}:{i*i}')
# Print all even numbers between 1 and 50.
# for i in range (1,100):
#     if i %2==0:
#         print(f'Even numbers:{i}')
    
 
    

# Print the multiplication table of 7.
# for i in range(1,11):
#     print(f'{7*i}')
# Print each character of a string "Python".'''
# for chr in "python":
#     print(chr)
# # Print the sum of first 100 natural numbers.
# total=0
# for i  in range(0,401):
#     total=total+i
#     print(total)
    
        
   

# # Print all numbers divisible by 3 and 5 between 1–100.
# for i in range(1,200):
#     if i%3==0 and i%5==0:
#         print(i)

# Count the number of vowels in a string.
# Count the number of vowels in a string

text = "Python programming is amazing"
vowels = "aeiouAEIOU"
count = 0

for ch in text:
    if ch in vowels:
        count += 1

print("Number of vowels:", count)


# # Print a patternPrint the sum of first 100 natural numbers.
# for i in range(1,100):
#         print(" " * (100 - i) + "*" * (2 * i - 1))


# # Print all numbers divisible by 3 and 5 between 1–100.
# for i in range(0,101):
#      if i%3==0 or i%5==0:
#           print(i) 

# Count the number of vowels in a string.
# word="Hii Shrutii!"
# vowels="aeiouAEIOU"
# for ch in text:
#      if vowels in word:
          

# '# Print a pattern
# for i in range(1,51):
#      print("*"*i)'
lang="PYTHON"
for x in lang:
    print(x)
# 🔹 Practice Questions (While Loop – Beginner)

# Print numbers from 1 to 10 using while.

# Print the reverse of numbers from 10 to 1.

# Print the factorial of a number (e.g., 5! = 120).

# Print the sum of digits of a number. (e.g., 123 → 6).

# Keep taking input from the user until they enter "exit".

# 🔹 Practice Questions (While Loop – Advanced)

# Check if a number is prime or not.

# Print the Fibonacci series (e.g., 0, 1, 1, 2, 3, 5…).

# Find the greatest common divisor (GCD) of two numbers.

# Implement a guess the number game.

# Keep dividing a number by 2 until it becomes less than 1, and count the steps.

    
   
    



