# keystore

A simple RESTful key/value store

## Dependencies

* [Node](http://nodejs.org)
* [Redis](http://redis.io)

## Installation

```bash
npm install
```

## Configuration

The service is configured through the following environment variables:

```bash
# The port to listen to (3000 default)
PORT=3000

# The redis host
REDIS_HOST=localhost

# The redis port
REDIS_PORT=6379
```

If `REDIS_HOST` is not defined, an in-memory (non persistent) data-store is used instead.

To start the service:

```
npm start
```

## Usage

To add a new key/value

```
curl -X POST -H "Content-Type: application/json" -d '{
    "key": "foo",
    "value": "bar"
}' http://localhost:3000/v1/store 
```

To get a key/value

```
curl -H "Content-Type: application/json" http://localhost:3000/v1/store/foo
```

To update a key/value

```
curl -X PUT -H "Content-Type: application/json" -d '{
    "value": "bar2"
}' http://localhost:3000/v1/store/foo
```

To get all key/values

```
curl -H "Content-Type: application/json" http://localhost:3000/v1/store
```

To delete a key/value
```
curl -X DELETE http://localhost:3000/v1/store/foo
```

## Demonstration

A quick demonstration script is available which illustrates all of the above features (must run `npm start` first):

```
./demo.sh
```