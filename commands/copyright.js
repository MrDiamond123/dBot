exports.run = (client, message, args) => {
doNotDelete = false;
message.author.send(
	"dBot Copyright" +
	"Copyright (C) 2017 MrDiamond123" +
	
	"zBot Copyright" +
	"Copyright (C) 2017 Victor Tran and Rylan Arbour\n\n" +
	"Rewritten by zBlake for use on Rainbow Gaming. " +
	
	"Licence" +
	
	"This program is free software: you can redistribute it and/or modify\n" +
	"it under the terms of the GNU General Public License as published by\n" +
	"the Free Software Foundation, either version 3 of the License, or\n" +
	"(at your option) any later version.\n\n" +

	"This program is distributed in the hope that it will be useful,\n" +
	"but WITHOUT ANY WARRANTY; without even the implied warranty of\n" +
	"MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n" +
	"GNU General Public License for more details.\n\n" +

	"You should have received a copy of the GNU General Public License\n" +
	"along with this program.  If not, see <http://www.gnu.org/licenses/>"
);
message.delete();
}

let command = 'copyright'
, description = 'See copyright information related to dBot.'
, usage = 'copyright'
, throttle = {usages: 1, duration: 10};
exports.settings = {command: command, description: description, usage: usage, throttle: throttle}
