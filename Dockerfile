FROM node:18-alpine
WORKDIR /senet
COPY . .
RUN npm install
CMD ["npx", "react-native", "start"];["npx", "react-native", "run-android"]
EXPOSE 3000