import pyautogui as pg
import time
import webbrowser as web
phone_no=input("Ingrese el numero: ")
parsedMessage=" "
web.open('https://web.whatsapp.com/send?phone='+phone_no+'&text='+parsedMessage)
time.sleep(8)
for i in range(10):
     pg.write('esto es una prueba')
     pg.press('enter')
     print('Mensaje #'+str(i+1)+' enviado')
pass
pg.alert('Bomba de mensajes finalizada')