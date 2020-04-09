# -*- coding:utf-8 -*-
# @Script: utils.py
# @Author: Andre Litty
# @Email: alittysw@gmail.com
# @Create At: 2020-04-10 03:21:53
# @Last Modified By: Andre Litty
# @Last Modified At: 2020-04-10 03:35:15
# @Description: Utils to search and replace file content.

import glob
import mmap


def find_file_content(search_string):
    try:
        for js_file in glob.glob('static/*.js'):
            with open(js_file, 'rb', 0) as file, mmap.mmap(
                    file.fileno(),
                    0,
                    access=mmap.ACCESS_READ) as s:
                if s.find(search_string.encode()) != -1:
                    return js_file
    except Exception:
        return None


def in_file_replace(filename, to_replace, replace_with):
    try:
        with open(filename, 'r') as file:
            contend = file.read()
        contend = contend.replace(to_replace, replace_with)
        with open(filename, 'w') as file:
            file.write(contend)
        return True
    except Exception:
        return False
