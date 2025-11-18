@extends('admin.layouts.app')

@section('title')
    Add New Word
@endsection

@section('content')
 <div class="row my-5">
    <div class="col-md-3">
       @includeIf('admin.layouts.sidebar')
    </div>
    <div class="col-md-9">
        <div class="card">
           <div class="card-header bg-white">
                <h3 class="mt-2">
                    Add New Word
                </h3>
           </div>

           <div class="card-body">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <form action="{{route('admin.words.store')}}" method="post">
                        @csrf 

                        <div class="mb-3">
                            <label for="name" class="form-label">Name*</label>
                            <input
                                type="text"
                                class="form-control  @error('name') is-invalid @enderror"
                                name="name"
                                id="name"
                                placeholder="Word name"
                            />
                            @error('name')
                                <div class="invalid-feedback">
                                    <strong>{{$message}}</strong>
                                </div>
                            @enderror

                            <button
                                type="submit"
                                class="btn btn-primary mt-2">
                                Submit
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </div>
    </div>
</div>
@endsection