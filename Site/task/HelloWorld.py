import sublime
import sublime_plugin


class C(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''#include <stdio.h>
 
int main()
{
  printf("Hello, World!\n");
  return 0;
}''')

class CPlusPlus(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''#include <iostream>
using namespace std;
 
int main() 
{
    cout << "Hello, World!";
    return 0;
}''')

class CSharp(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''using System;

namespace HelloWorld
{
    class Hello 
    {
        static void Main() 
        {
            Console.WriteLine("Hello World!");
        }
    }
}''')

class Java(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}''')

class JavaScript(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''!DOCTYPE HTML>
<html>
 
<body>
 
  <script>
    alert( 'Hello, world!' );
  </script>
 
</body>
 
</html>''')

class Python(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''print("Hello, World!")''')

class php(sublime_plugin.TextCommand):
	def run(self, edit):
		text = self.view
		text.replace(edit, text.sel()[0], 
'''<?php
  echo "Hello, World!";
?>''')


