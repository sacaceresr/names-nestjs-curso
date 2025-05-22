import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NamesService } from './names.service';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/names')
@ApiTags('Names')
export class NamesController {

    constructor(private namesService: NamesService) { }

    @Post()
    @ApiBody({
        description: 'Name to be added',
        examples: {
            example1: {
                value: {
                    name: 'Mario Hugo'
                }
            }
        },
    })
    @ApiOperation({
        description: "Add a new name to the list if it doesn't exist, returns true if added, false if it already exists",
    })
    createName(@Body() data: {name: string}) {
        return this.namesService.createName(data.name);
    }

    @Get()
    @ApiQuery({
        name: 'start',
        type: 'string',
        required: false,
        description: 'Filter names by start string',
    })
    @ApiOperation({
        description: "Get all names or filter by start string",
    })
    getNames(@Query('start') start: string) {
        return this.namesService.getNames(start);
    }

    @Put('/:name/:newName')
    @ApiParam({
        name: 'name',
        description: 'Name to be updated',
        type: 'string',
    })
    @ApiParam({
        name: 'newName',
        description: 'New name to be updated',
        type: 'string',
    })
    @ApiOperation({
        description: "Update a name if it exists and the new name doesn't exist, returns true if updated, false if it doesn't exist or the new name already exists",
    })
    updateName(@Param('name') name: string, @Param('newName') newName: string) {
        return this.namesService.updateName(name, newName);
    }

    @Delete('clear')
    @ApiOperation({
        description: "Clear all names",
    })
    clearNames() {
        return this.namesService.clearNames();
    }

    @Delete('/:name')
    @ApiParam({
        name: 'name',
        description: 'Name to be deleted',
        type: 'string',
    })
    @ApiOperation({
        description: "Delete a name if it exists, returns true if deleted, false if it doesn't exist",
    })
    deleteName(@Param('name') name: string) {
        return this.namesService.deleteName(name);
    }
    
}
