#!/bin/bash

NODES=(
  "127.0.0.1:7000"
  "127.0.0.1:7001"
  "127.0.0.1:7002"
  "127.0.0.1:7003"
  "127.0.0.1:7004"
  "127.0.0.1:7005"
)

for NODE in "${NODES[@]}"; do
  echo "Flushing all data on node $NODE"
  redis-cli -c -h $(echo $NODE | cut -d':' -f1) -p $(echo $NODE | cut -d':' -f2) FLUSHALL
  if [ $? -eq 0 ]; then
    echo "Successfully flushed $NODE"
  else
    echo "Failed to flush $NODE"
  fi
done

echo "All nodes have been flushed."
