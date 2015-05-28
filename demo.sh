#!/bin/sh

cat << EOF


add a key/value
    curl -X POST -H "Content-Type: application/json" -d '{
        "key": "sports",
        "value": ["hockey","football","soccer"]
    }' http://localhost:3000/v1/store
EOF

curl -X POST -H "Content-Type: application/json" -d '{
    "key": "sports",
    "value": ["hockey","football","soccer"]
}' http://localhost:3000/v1/store

cat << EOF

add a second key/value
    curl -X POST -H "Content-Type: application/json" -d '{
        "key": "movies",
        "value": ["horror","drama","suspense"]
    }' http://localhost:3000/v1/store
EOF

curl -X POST -H "Content-Type: application/json" -d '{
    "key": "movies",
    "value": ["horror","drama","suspense"]
}' http://localhost:3000/v1/store

cat << EOF

add a third key/value
    curl -X POST -H "Content-Type: application/json" -d '{
        "key": "vehicles",
        "value": ["bicycle","car","truck"]
    }' http://localhost:3000/v1/store
EOF

curl -X POST -H "Content-Type: application/json" -d '{
    "key": "vehicles",
    "value": ["bicyles","car","truck"]
}' http://localhost:3000/v1/store

cat << EOF

get a key/value
    curl -H "Content-Type: application/json" http://localhost:3000/v1/store/sports

EOF

curl -H "Content-Type: application/json" http://localhost:3000/v1/store/sports

cat << EOF


udpate a key/value
    curl -X PUT -H "Content-Type: application/json" -d '{
        "value": ["hockey","football","soccer","tennis"]
    }' http://localhost:3000/v1/store/sports
EOF

curl -X PUT -H "Content-Type: application/json" -d '{
    "value": ["hockey","football","soccer","tennis"]
}' http://localhost:3000/v1/store/sports

cat << EOF

delete a key/value
    curl -X DELETE http://localhost:3000/v1/store/vehicles
EOF

curl -X DELETE http://localhost:3000/v1/store/vehicles

cat << EOF

get all key/values
    curl -H "Content-Type: application/json" http://localhost:3000/v1/store

EOF

curl -H "Content-Type: application/json" http://localhost:3000/v1/store

echo
echo
echo
