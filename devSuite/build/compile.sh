#!/bin/sh
# Script to compile project files

# GLOBAL VARIABLES #############################################################

## PROJECT SPECIFIC ################## ヽ(•‿•)ノ ##################

declare VC_PACKAGE=devSuite

declare VC_BRIEF="Developer tools for canvasLab drawing framework"

declare VERSION="0.0.1"

## INPUT #########################################################

declare INPUT_FOLDER=../scripts/suite

## OUTPUT ########################################################

declare OUTPUT_DIRECTORY=../scripts

declare OUTPUT="${OUTPUT_DIRECTORY}/${VC_PACKAGE}.js"

### PLANT UML ######################################

declare PLANT_BUILD=~/Programs/Python/PlantUml/ClassGenerator/source/app

declare PLANT_SOURCE=~/Programs/HTML5/canvasLab/devSuite/scripts/suite/classes

declare PLANT_OUTPUT=~/Programs/HTML5/canvasLab/devSuite/docs/PlantUml

## MUTATATORS ####################################################

declare LEAD_HTML_FILE=../index.html

## CACHE #########################################################

declare HEADER

declare PREAMBLE

### FILES ##########################################

declare FILES

# ------------------------------------ #
# Files to be inserted prior to $FILES #
# ------------------------------------ #
declare FILES_HEAD=(
    "${INPUT_FOLDER}/generics/prototypes.js"
)

# ------------------------------------ #
# Specific folders to loop through     #
# ------------------------------------ #
declare FOLDERS=(
    "${INPUT_FOLDER}/classes"
)

# ------------------------------------ #
# Root application file; if available  #
# ------------------------------------ #
declare FILES_FOOT=(
    "${INPUT_FOLDER}/main.js"
)

### GENERAL ########################################

declare NO_ERRORS=true

declare DATE=$(date +"%m-%d-%y")
declare TIME=$(date +"%r")

declare FILE_REGEX="\.js"

declare VERSION

### PROMPT #########################################

declare FG_RED="\033[1;31m"
declare FG_GREEN="\033[1;32m"
declare FG_PINK="\033[1;35m"
declare FG_BLUE="\033[1;36m"
declare FG_WHITE="\033[1;37m"

declare FG_YELLOW="\033[1;33m"
declare NOCOLOR="\033[0m"

declare PROMPT_A="${FG_BLUE}⇢⇢${NOCOLOR}"
declare PROMPT_B="${FG_BLUE}⇡⇡${NOCOLOR}"

declare TITLE_BASH="${FG_WHITE}- ${FG_WHITE}BASH${NOCOLOR}"
declare TITLE_PYTHON="${FG_WHITE}- ${FG_PINK}PYTHON${NOCOLOR}"
declare TITLE_NODE="${FG_WHITE}- ${FG_BLUE}NODE${NOCOLOR}"

declare TITLE_PACKAGE="${FG_PINK}${VC_PACKAGE}${NOCOLOR}"

# MAIN #########################################################################

main ()
{
	clear

    search_folders

    compile_output

    # compile_minified

    # compile_plantuml

    complete
}

# FUNCTIONS ####################################################################

## COMPILE #######################################################

declare OUTPUT

function compile_header ()
{
    HEADER="// @program: \t\t${VC_PACKAGE} \\n"
    HEADER+="// @brief: \t\t\t${VC_BRIEF} \\n"
    HEADER+="// @author: \t\tJustin D. Byrne \\n"
    HEADER+="// @email: \t\t\tjustin@byrne-systems.com \\n"
    HEADER+="// @version: \t\t${VERSION} \\n"
    HEADER+="// @license: \t\tGPL-2.0\\n\\n"

    HEADER+="\"use strict\";"

    echo $HEADER > $OUTPUT
}

function compile_preamble ()
{
    PREAMBLE="\/** \\n"
    PREAMBLE+=" * ${VC_PACKAGE} - ${VC_BRIEF} \\n"
    PREAMBLE+=" * Copyright (C) 2023  Justin D. Byrne \\n"
    PREAMBLE+=" * \\n"
    PREAMBLE+=" * This library is free software; you can redistribute it and\/or \\n"
    PREAMBLE+=" * modify it under the terms of the GNU Library General Public \\n"
    PREAMBLE+=" * License as published by the Free Software Foundation; either \\n"
    PREAMBLE+=" * version 2 of the License, or (at your option) any later version. \\n"
    PREAMBLE+=" * \\n"
    PREAMBLE+=" * This library is distributed in the hope that it will be useful, \\n"
    PREAMBLE+=" * but WITHOUT ANY WARRANTY; without even the implied warranty of \\n"
    PREAMBLE+=" * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU \\n"
    PREAMBLE+=" * Library General Public License for more details. \\n"
    PREAMBLE+=" * \\n"
    PREAMBLE+=" * You should have received a copy of the GNU Library General Public \\n"
    PREAMBLE+=" * License along with this library; if not, write to the \\n"
    PREAMBLE+=" * Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, \\n"
    PREAMBLE+=" * Boston, MA  02110-1301, USA. \\n"
    PREAMBLE+=" * \\n"
    PREAMBLE+=" * Byrne-Systems, hereby disclaims all copyright interest in \\n"
    PREAMBLE+=" * the library '${VC_PACKAGE}' (${VC_BRIEF}) written \\n"
    PREAMBLE+=" * by Justin D. Byrne. (justin@byrne-systems.com) \\n"
    PREAMBLE+=" *\/ \\n\\n"
}

function compile_output ()
{
    compile_header


    for FILE in ${FILES_HEAD[@]}        # HEAD
    do
        insert_file $FILE
    done

    for FILE in ${FILES[@]}             # BODY
    do
        insert_file $FILE
    done

    for FILE in ${FILES_FOOT[@]}        # FOOT
    do
        insert_file $FILE
    done


    echo "${PROMPT_A} ${TITLE_PACKAGE} Compiling Complete ${TITLE_BASH} \t\t${FG_BLUE}[${OUTPUT}]${NOCOLOR}\n"


    afplay ../../build/audio/start.mp3
}

function compile_minified ()
{
    FILE_MIN=${OUTPUT_DIRECTORY}/${VC_PACKAGE}.min.js

    if command -v uglifyjs
    then
        if $(uglifyjs ${OUTPUT} --source-map -o ${FILE_MIN} --compress --mangle reserved=['window']);
        then echo "." >/dev/null
        else
            NO_ERRORS=false
        fi
    fi

    echo "\n${PROMPT_B} ${TITLE_PACKAGE} Minified ${TITLE_NODE}\t\t\t${FG_BLUE}[${FILE_MIN}]${NOCOLOR}\n"

    update_minified_js_preamble $FILE_MIN

    afplay ../../build/audio/shrink.mp3
}

function compile_plantuml ()
{
    declare DEFAULT_PATH=$(pwd)


    $(rm -r $PLANT_OUTPUT)


    if command -v python3
    then

        if cd $PLANT_BUILD
        then

            echo "\n"

            echo "python3 BuildClass.py ${PLANT_SOURCE} -m \"png\" -l ${PLANT_OUTPUT}"

            if (python3 BuildClass.py $PLANT_SOURCE -m "png" -l $PLANT_OUTPUT)
                then echo "\n${PROMPT}  ${FG_PINK}PlantUML Complete ${TITLE_PYTHON}\t\t\t${FG_BLUE}[${PLANT_OUTPUT}]${NOCOLOR}\n"
            else
                NO_ERRORS=false
            fi

            cd $DEFAULT_PATH

        else
            NO_ERRORS=false
        fi

    fi
}

## UPDATE ########################################################

function update_minified_js_preamble ()
{
    compile_preamble

    sed -r -i '' -e 's/"use strict"/'"$PREAMBLE"'"use strict"/' ${1}
}

## GENERAL #######################################################

function search_folder ()
{
    for ENTRY in "${1}"/*
    do
        [[ $ENTRY =~ $FILE_REGEX ]] && FILES+="${ENTRY} "
    done
}

function search_folders ()
{
    for FOLDER in ${FOLDERS[@]}
    do
        search_folder $FOLDER
    done
}

function insert_file ()
{
    echo " " | cat - $1 >> $OUTPUT
}

function flash_screen ()
{
    printf '\e[?5h'  # Turn on reverse video

    sleep 0.15

    printf '\e[?5l'  # Turn on normal video
}

## COMPLETE ######################################################

function complete ()
{
    echo "${FG_YELLOW}ᕕ( ᐛ )ᕗ${NOCOLOR} Complete - ${FG_WHITE}${DATE} ${NOCOLOR}@ ${FG_WHITE}${TIME}${NOCOLOR}\n"

    if $NO_ERRORS
    then
        afplay ../../build/audio/success.mp3

        if [[ "$OSTYPE" == "darwin"*  ]]; then
            osascript focus.scpt
            osascript reload.scpt
        fi
    else
        afplay ../../build/audio/failure.mp3

        flash_screen
    fi
}

main
