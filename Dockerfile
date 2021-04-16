FROM alpine:3.10
COPY . /app
WORKDIR /app
RUN echo Started server