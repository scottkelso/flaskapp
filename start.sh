#!/bin/bash

clear

#TODO: Log better error
echo Exception in thread "main" java.lang.NullPointerException
echo "        at com.example.myproject.Book.getTitle(Book.java:16)"
echo "        at com.example.myproject.Author.getBookTitles(Author.java:25)"
echo "        at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"
echo
echo ERROR: KAIDEN system had a critical error!
echo WARNING: KAIDEN system offline!
echo

#TODO: Hide this authentication
echo Please enter administrative username and password to restart the system...
read -p 'Username: ' uservar
while [ $uservar != "admin" ]
do
  echo Invalid username! Try again!
  read -p 'Username: ' uservar
done

read -sp 'Password: ' passvar
while [ $passvar != "pass" ]
do
  echo Invalid password! Try again!
  read -sp 'Password: ' passvar
done

echo Logging in as $uservar.
echo Restarting KAIDEN...
sleep 1s

open -a "Google Chrome" frontend/index.html 
