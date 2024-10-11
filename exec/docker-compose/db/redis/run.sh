#!/bin/bash

# Redis 클러스터 노드 정보 (호스트와 포트를 묶어서 관리)
REDIS_NODES=(
  "127.0.0.1:7000"
  "127.0.0.1:7002"
  "127.0.0.1:7004"
  "127.0.0.1:7001"
  "127.0.0.1:7003"
  "127.0.0.1:7005"
)

# Docker Compose로 Redis 클러스터 컨테이너 시작
docker-compose up -d

# 클러스터 노드 생성 및 초기화
redis-cli --cluster create ${REDIS_NODES[@]} --cluster-replicas 1 --cluster-yes

