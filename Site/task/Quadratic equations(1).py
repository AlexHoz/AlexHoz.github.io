import math
import re
import tkinter as tk
from tkinter import ttk, messagebox 


class Main(tk.Frame):
    def __init__(self, root):
        super().__init__(root)
        self.init_main()

    def Answer(self):
        a = self.inputA.get()
        if (re.findall(r'^[0-9]-', a) or a == '') : a = 0
        else : a = int(a)

        b = self.inputB.get()
        if (re.findall(r'^[0-9]-', b) or b == '') : b = 0
        else : b = int(b)

        c = self.inputC.get()
        if (re.findall(r'^[0-9]-', c) or c == '') : c = 0
        else : c = int(c)

        print(f'a = {a}  b = {b}  c = {c}')
        if a == 0:
            if b == 0:
                if c == 0:
                    self.answerX0.config(text = '0 = 0')
                    self.answerX1.config(text = '')
                else:
                   self.answerX0.config(text = "{}!=0".format(c))
                   self.answerX1.config(text = '')
            else:
                self.answerX0.config(text = 'x =' + str(-c/b))
                self.answerX1.config(text = '')
        else:		
            D = b**2 - 4 * a * c
            print(D)
            if D > 0:
                self.answerX0.config(text = 'x1 =' + str((-b + math.sqrt(D))/(2*a)))
                self.answerX1.config(text = 'x2 =' + str((-b - math.sqrt(D))/(2*a)))
            elif D == 0:
                self.answerX0.config(text = 'x =' + str(-b/(2*a)))
                self.answerX1.config(text = '')
            else:
                self.answerX0.config(text = 'x1 =' + str(complex(-b, math.sqrt(abs(D)))/(2*a)))
                self.answerX1.config(text = 'x2 =' + str(complex(-b, - math.sqrt(abs(D)))/(2*a)))

    def init_main(self):
        #Значения
        inputFrame = tk.Frame(bd=10)
        inputFrame.pack(side=tk.TOP, fill=tk.X)

        self.inputA = tk.Entry(inputFrame, width=10)
        self.inputA.pack(side=tk.LEFT, pady="3")
        self.text0 = tk.Label(inputFrame,text=" X^2 + ",width=5)
        self.text0.pack(side=tk.LEFT, pady="3")

        self.inputB = tk.Entry(inputFrame, width=10)
        self.inputB.pack(side=tk.LEFT, pady="3")
        self.text1 = tk.Label(inputFrame,text=" X  + ",width=5)
        self.text1.pack(side=tk.LEFT, pady="3")

        self.inputC = tk.Entry(inputFrame, width=10)
        self.inputC.pack(side=tk.LEFT, pady="3")
        self.text2 = tk.Label(inputFrame,text=" = 0",width=5)
        self.text2.pack(side=tk.LEFT, pady="3") 

        self.Input = tk.Button(inputFrame, text = "ВВОД", width=10, command = self.Answer)
        self.Input.pack(side=tk.LEFT, pady="3") 
       
        #Ответ
        AnswerFrame = tk.Frame(bd=10)
        AnswerFrame.pack(side=tk.TOP, fill=tk.X)
        self.answerX0 = tk.Label(AnswerFrame,text= "",width=30)
        self.answerX0.pack(side=tk.TOP, pady="3")
        self.answerX1 = tk.Label(AnswerFrame,text= "",width=30)
        self.answerX1.pack(side=tk.TOP, pady="3")
    

if __name__ == "__main__":
    root = tk.Tk()
    app = Main(root)
    app.pack()
    root.geometry("400x200")
    root.resizable(False, False)
root.mainloop()