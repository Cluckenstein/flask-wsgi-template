#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec 23 21:40:35 2020

@author: maximilianreihn
"""

from flask import render_template, request, make_response, send_from_directory
from src.app import app
import json
import os 
from src.worker.backend_helper import helper



@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('page/index.html')



@app.route('/ploter/', methods=['GET', 'POST'])
def ploter():

    return None


@app.route('/download/<filename>')
def download(filename):
    return send_from_directory('/src/inner_mount', filename)
