#!/usr/bin/env python
#-*- coding: utf-8 -*-

# 時間
import time
# GPIO
import RPi.GPIO as GPIO
# 音楽再生
import pygame.mixer
import random

INTAVAL = 1
SLEEPTIME = 10
SENSOR_PIN = 18

GPIO.cleanup()
GPIO.setmode(GPIO.BCM)
GPIO.setup(SENSOR_PIN, GPIO.IN)

#音楽再生スタート

while True:
  print GPIO.input(SENSOR_PIN)
  if(GPIO.input(SENSOR_PIN) == GPIO.HIGH):
    print("人を検知しました！")
    pygame.mixer.init()
    number = random.randint(1,10)
    voice_music =  "{0}{1}{2}".format('duck_voice', number, '.mp3')
    pygame.mixer.music.load(voice_music)
    pygame.mixer.music.play(1)
    time.sleep(30)
  else:
    print("誰もいないよん！")

  time.sleep(SLEEPTIME)
