export SERVER_IP=34.175.230.7
export VERSION_PROD=blue
export VERSION_DEV=green
envsubst < switch-prod.yaml | kubectl apply -f -