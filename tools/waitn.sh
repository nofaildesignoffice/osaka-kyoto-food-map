# wait until raw_routes.jsonl grows by N lines or timeout seconds
start=$(wc -l < raw_routes.jsonl); n=$1; to=$2; t=0
while [ $t -lt $to ]; do c=$(wc -l < raw_routes.jsonl); [ $((c-start)) -ge $n ] && break; timeout 5 tail -f /dev/null 2>/dev/null; t=$((t+5)); done
echo "added $(( $(wc -l < raw_routes.jsonl) - start )) in ${t}s"
