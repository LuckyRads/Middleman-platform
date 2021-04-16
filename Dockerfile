FROM alpine:3.10
ADD *.js /app
ADD *.html /app
RUN npm build