import PRi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.IN)

try:
    while True:
        print GPIO.input(18)
        sleep(1)

except KeyboardInterrupt:
    pass

GPIO.cleanup()


# GPIO.input(18) が 1 だったら音を鳴らす
