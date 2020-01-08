REM Start Promethus then Grafana
call cd prometheus-2.15.2
REM call prometheus.exe --storage.tsdb.min-block-duration=30m && --storage.tsdb.max-block-duration=1d
call prometheus.exe --storage.tsdb.min-block-duration=30m && --storage.tsdb.max-block-duration=1d

REM call TIMEOUT 10

REM call ..\grafana-6.5.2\bin\grafana-server.exe