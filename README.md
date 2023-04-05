# IMAGE PROCESSING API

## Dependencies
To clone this **Repository**:
``` bash
git clone https://github.com/pvghuy/image-processing-api.git
```
To install **node_modules**:
```
npm install
```

## Scripts
To format codes via **Prettier**:
```
npm run prettier
```
To compile **TypeScript** codes into **JavaScript** codes:
```
npm run build
```
To run unit tests with **Jasmine**:
```
npm run jasmine
```
To compile code and then run unit tests:
```
npm run test
```
To start the **server**:
```
npm run start
```
## Usage

This server will run on port **3000**:  
[http://localhost:3000/](http://localhost:3000/)  
  
Endpoint to get **list of file**:  
[http://localhost:3000/api/](http://localhost:3000/api/)  

Here is **list of file**:
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica
  
Endpoint to **resize** the image (URL below using **fjord** as an example):  
[http://localhost:3000/api/images?filename=fjord&width=200&height=200](http://localhost:3000/api/images?filename=fjord&width=200&height=200)  
After access the **Endpoint** to resize image, `reshesh` the page to display the **resized image**.  
### Notes
Other **invalid endpoints** will throw you a message displayed on the screen.
