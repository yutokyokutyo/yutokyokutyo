#!/usr/bin/env python
#-*- coding: utf-8 -*-

# 時間
import time
# GPIO
import RPi.GPIO as GPIO
# 音楽再生
import pygame.mixer

INTAVAL = 1
SLEEPTIME = 1
SENSOR_PIN = 18

GPIO.cleanup()
GPIO.setmode(GPIO.BCM)
GPIO.setup(SENSOR_PIN, GPIO.IN)

#音楽再生スタート
pygame.mixer.init()
pygame.mixer.music.load("snowboy.wav")

while True:
  print GPIO.input(SENSOR_PIN)
  if(GPIO.input(SENSOR_PIN) == GPIO.HIGH):
    print("人を検知しました！")
    pygame.mixer.music.play(1)
    pygame.mixer.music.stop()
  else:
    print("誰もいないよん！")

  time.sleep(SLEEPTIME)
