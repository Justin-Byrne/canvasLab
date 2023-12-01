#!/bin/sh
# Script to compile project files

# GLOBAL VARIABLES #############################################################

## PROJECT SPECIFIC ################## ヽ(•‿•)ノ ##################

declare VC_PACKAGE=canvasLab

declare VC_BRIEF="HTML5 canvas drawing framework"

## INPUT #########################################################

declare INPUT_FOLDER=../script/source

## OUTPUT ########################################################

declare OUTPUT_DIRECTORY=../script/distro

declare OUTPUT_JSDOC=../docs/JSDoc.md
declare OUTPUT_JSDOCS=../docs/JSDoc

### PLANT UML ######################################

declare PLANT_BUILD=~/Programs/Python/PlantUml/ClassGenerator/source/app

declare PLANT_SOURCE=~/Programs/HTML5/canvasLab/script/source

declare PLANT_OUTPUT=~/Programs/HTML5/canvasLab/docs/PlantUml

## MUTATATORS ####################################################

declare LEAD_JS_FILE=${INPUT_FOLDER}/classes/Handlers/Application.js
declare LEAD_HTML_FILE='../dev-test/index.html'

## CACHE #########################################################

declare HEADER

declare PREAMBLE

### FILES ##########################################

declare FILES

# ------------------------------------ #
# Files to be inserted prior to $FILES #
# ------------------------------------ #
declare FILES_HEAD=(
    "${INPUT_FOLDER}/ancillary/shared/PropertyBlocks.js"
    "${INPUT_FOLDER}/ancillary/shared/Utilities.js"
    "${INPUT_FOLDER}/ancillary/shared/Validation.js"
    "${INPUT_FOLDER}/ancillary/debug.js"
    "${INPUT_FOLDER}/classes/canvasLab.js"
)

# ------------------------------------ #
# Specific folders to loop through     #
# ------------------------------------ #
declare FOLDERS=(
    "${INPUT_FOLDER}/classes/Subject"
    "${INPUT_FOLDER}/classes/Subject/Collections"
    "${INPUT_FOLDER}/classes/Object"
    "${INPUT_FOLDER}/classes/Object/Collections"
    "${INPUT_FOLDER}/classes/Handlers"
)

# ------------------------------------ #
# Root application file; if available  #
# ------------------------------------ #
declare FILES_FOOT=(
    # "${INPUT_FOLDER}/classes/Application.js"
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

declare PROMPT="${FG_BLUE}>>${NOCOLOR}"

# MAIN #########################################################################

main ()
{
    search_folders

    clear

    get_version

    compile_output

    compile_minified

    compile_readme

    compile_jsdoc

    compile_jsdocs

    # compile_plantuml

    complete
}

# FUNCTIONS ####################################################################

## COMPILE #######################################################

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
    update_lead_js_file $LEAD_JS_FILE

    update_lead_html_file $LEAD_HTML_FILE


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


    echo "${PROMPT} ${FG_PINK}${VC_PACKAGE} Compiling Complete \t${FG_BLUE}[${OUTPUT}]${NOCOLOR}\n"


    afplay audio/complete.mp3
}

function compile_minified ()
{
    FILE_MIN=${OUTPUT_DIRECTORY}/${VC_PACKAGE}-v${VERSION}-min.js

    if command -v uglifyjs
    then
        if $(uglifyjs ${OUTPUT} --source-map -o ${FILE_MIN} --compress --mangle reserved=['window']); then
            echo "\n${PROMPT} ${FG_PINK}${VC_PACKAGE} Minified Complete \t\t${FG_BLUE}[${FILE_MIN}]${NOCOLOR}\n"
        else
            NO_ERRORS=false
        fi
    fi

    update_minified_js_preamble $FILE_MIN

    afplay audio/shrink.mp3
}

function compile_readme ()
{
    if [ -e "readme.sh" ]
    then
        $(sh readme.sh)

        echo "${PROMPT} ${FG_PINK}Read Me Complete \t\t\t${FG_BLUE}[../README.md]${NOCOLOR}\n"
    fi
}

function compile_jsdoc ()
{
    if command -v jsdoc2md
    then
        if $(jsdoc2md ${OUTPUT} > $OUTPUT_JSDOC)
            then echo "\n${PROMPT} ${FG_PINK}JSDoc Complete \t\t\t${FG_BLUE}[${OUTPUT_JSDOC}]${NOCOLOR}\n"
        else
            NO_ERRORS=false
        fi
    fi
}

function compile_jsdocs ()
{
    $(rm -r $OUTPUT_JSDOCS)

    if command -v jsdoc
    then
        if (jsdoc --private $OUTPUT -d $OUTPUT_JSDOCS)
            then echo "\n${PROMPT} ${FG_PINK}JSDocs Complete \t\t\t${FG_BLUE}[${OUTPUT_JSDOCS}]${NOCOLOR}\n"
        else
            NO_ERRORS=false
        fi
    fi
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
                then echo "\n${PROMPT} ${FG_PINK}PlantUML Complete \t\t\t${FG_BLUE}[${PLANT_OUTPUT}]${NOCOLOR}\n"
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

function update_lead_js_file ()
{
    sed -r -i '' -e 's/Version:.+/Version:   '"'${VERSION}'"',/' ${1}
    sed -r -i '' -e 's/Updated:.+/Updated:   '"'$(date +"%b, %d %Y")'"',/' ${1}
}

function update_lead_html_file ()
{
    sed -r -i '' -e 's/'${VC_PACKAGE}'-v.+/'${VC_PACKAGE}'-v'${VERSION}'-min.js"><\/script>/' ${1}
}

function update_minified_js_preamble ()
{
    compile_preamble

    sed -r -i '' -e 's/"use strict"/'"$PREAMBLE"'"use strict"/' ${1}
}

## GENERAL #######################################################

function get_version ()
{
    VERSION=`head -n4 ../docs/CHANGELOG.md | awk '/## \[/{print $2}'`

    LENGTH=${#VERSION}

    LENGTH=$(($LENGTH-2))

    VERSION=${VERSION:1:$LENGTH}


    # SET MASTER OUTPUT VARIABLES
    OUTPUT_MASTER=${VC_PACKAGE}-v${VERSION}.js

    OUTPUT="${OUTPUT_DIRECTORY}/${OUTPUT_MASTER}"
}

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

function complete()
{
    echo "${FG_YELLOW}ᕕ( ᐛ )ᕗ${NOCOLOR}\t\t\t\t\t${PROMPT} Complete - ${FG_WHITE}${DATE} ${NOCOLOR}@ ${FG_WHITE}${TIME}${NOCOLOR}\n"

    if $NO_ERRORS
    then
        afplay audio/success.mp3
    else
        afplay audio/failure.mp3

        flash_screen
    fi
}

main
