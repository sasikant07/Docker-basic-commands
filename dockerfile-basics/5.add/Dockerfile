FROM alpine:latest

RUN mkdir myFolder
ADD word.txt myFolder
# ADD word2.txt myFolder
ADD *.txt myFolder

CMD cat "myFolder/word.txt"