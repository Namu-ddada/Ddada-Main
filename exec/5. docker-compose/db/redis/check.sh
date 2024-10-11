#!/bin/bash

docker exec -it redis-master-1 redis-cli -p 7000 -c cluster nodes
